import {readFile,mkdir,writeFile} from 'node:fs/promises';
const html=await readFile('index.html','utf8');
if(!html.includes('function startDemo()')) throw new Error('Expected v36 source');
const mobile=html.replace(/<link\b[^>]*href="https:\/\/fonts\.(?:googleapis|gstatic)\.com[^>]*>\s*/g,'');
await mkdir('www',{recursive:true});
await writeFile('www/index.html',mobile);
await writeFile('www/privacy.html',await readFile('privacy.html','utf8'));
console.log('Offline assets built. Billing is NOT enabled.');
