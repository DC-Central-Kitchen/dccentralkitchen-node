import fs from 'fs';

export default function saveFile(fileName, data) {
  const dir = './data';
  try {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
  } catch (err) {
    console.log(err);
  }

  const storesFile = fs.createWriteStream(fileName);
  storesFile.write(JSON.stringify(data));
  storesFile.close();
}
