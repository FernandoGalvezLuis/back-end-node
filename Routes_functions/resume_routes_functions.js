import uuid4 from "uuid4";

export const getResumeEntries = (req, res) => {
    let query = `SELECT * FROM resume_entry ORDER BY id`;

   // let id = req.params.id;

   db.query(query, (err, result) => {
    if (err) res.send(err);
    res.send(result);
    }); 
}