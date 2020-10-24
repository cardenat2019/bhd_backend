// ============================
//  Puerto
// ============================
process.env.PORT = process.env.PORT || 4000;


// ============================
//  Entorno
// ============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


// ============================
//  Vencimiento del Token
// ============================
// 60 segundos
// 60 minutos
// 24 horas
// 30 días
process.env.CADUCIDAD_TOKEN = '48h';


// ============================
//  SEED de autenticación
// ============================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

// ============================
//  Base de datos
// ============================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'postgres://kqcchgeq:aAdxbdZyoXLWA4oI3OLMXloZ-5Osh4dX@raja.db.elephantsql.com:5432/kqcchgeq';
    //urlDB = 'postgres://localhost:5432/variacode';
} else {
    //urlDB = process.env.POSTGRESQL_URI;
    urlDB = 'postgres://kqcchgeq:aAdxbdZyoXLWA4oI3OLMXloZ-5Osh4dX@raja.db.elephantsql.com:5432/kqcchgeq';
}
process.env.URLDB = urlDB;

process.env.API_URL = '/api/v1';