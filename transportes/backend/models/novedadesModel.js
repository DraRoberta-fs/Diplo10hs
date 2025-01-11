var pool = require('./bd');

async function getNovedades() {
    var query = 'SELECT * FROM novedades';
    var [rows] = await pool.query(query);
    return rows;
}
async function insertNovedades(obj) {
    try {
        var query = "insert into novedades set ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
// test 
(async () => { try { console.log("Testing getNovedades function:"); const novedades = await getNovedades(); console.log(novedades); } catch (error) { console.error('Error connecting to novedades table:', error); } })();



module.exports = { getNovedades, insertNovedades };
