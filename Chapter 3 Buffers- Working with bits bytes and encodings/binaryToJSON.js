const fs = require('fs');

fs.readFile('./world.dbf', (err, buf) => {
	if(err){
		console.error(err);
		return;
	} else {
		let header = {};
		let date = new Date();
		date.setUTCFullYear(1900 + buf[1]);
		date.setUTCMonth(buf[2]);
		date.setUTCDate(buf[3]);

		header.lastUpdated = date.toUTCString();
		header.totalRecords = buf.readUInt32LE(4);
		header.headerBytes = buf.readUInt16LE(8);
		header.recordBytes = buf.readUInt16LE(10);


		let fields = [];
		let fieldOffset = 32;
		let fieldTerminator = 0x0D;
		const FIELD_TYPES = {'N': 'Numeric', 'C': 'Character'};

		while(buf[fieldOffset] != fieldTerminator){
			let fieldBuf = buf.slice(fieldOffset, fieldOffset+32);
			let field = {};
				field.name = fieldBuf.toString('ascii',0,10).replace(/\u0000/g, '');
				field.type = FIELD_TYPES[fieldBuf.toString('ascii',11,12)];
				field.length = fieldBuf[16]

			fields.push(field);
			fieldOffset += 32;
		}

		header.fields = fields;

		let startingRecordOffset = header.headerBytes;
		let records = [];
		for(let i = 0; i < header.totalRecords; i++){
			let recordOffset = startingRecordOffset + i * header.recordBytes;

			let record = {};
			record._isDel = buf.readUInt8(recordOffset) == 0x2A;
			
			for(let j = 0; j < fields.length; j++){
				let field = fields[j];
				let Type = field.type == 'Numeric' ? Number : String;

				record[field.name] = Type(buf.toString('ascii',recordOffset, recordOffset + field.length).trim());
				recordOffset += field.length;
			}

			records.push(record);
		}

		let result = {header, fields, records};
		fs.writeFile('world.json', JSON.stringify(result));
	}
})