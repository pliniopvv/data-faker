import { appendFile, appendFileSync, writeFile, writeFileSync } from 'fs';
import { faker } from "@faker-js/faker"

let __ARQ = 'data.csv';
let __TOTAL = 1000000;

console.log(`Criando ${__TOTAL} de dados fakes:\n`);
writeFileSync(__ARQ,'id;nome;cidade;estado;cep;aniv;emprego');

for (let i =0;i<__TOTAL;i++) {
    let nome = faker.name.findName();
    let cidade = faker.address.city();
    let estado = faker.address.country();
    let cep = faker.address.countryCode();
    let aniv = faker.date.past();
    let emprego = faker.company.companyName();

    appendFileSync(__ARQ,`${i};${nome};${cidade};${estado};${cep};${aniv};${emprego}\n`);
    // appendFile(__ARQ,`${i};${nome};${cidade};${estado};${cep};${aniv};${emprego}\n`,(er) => {
    //     console.log(`Uma pessoa não conseguiu nascer: ${nome}`);
    // });
    console.log(`${i} de ${__TOTAL}.`);
}
