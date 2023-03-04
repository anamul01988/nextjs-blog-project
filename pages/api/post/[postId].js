import openDb from "@/helpers/sqliteDatabase";
import slugify from "slugify";
export default async function getPosts(req, res) {
  const db = await openDb();
  if (req.method === "GET") {
    const postById = await db.get("Select * FROM post where slug = ?", [req.query.postId]); //slug er jaygay post_id o dite pari,,,ar postId ta hocce file er naming convention
    res.json(postById);
  } else if (req.method === "PUT") {
    const updatePost = await db.prepare(
      "UPDATE post set title = ?, slug = ?, imageUrl = ?, excerpt = ?, content = ?, author = ?, featured = ?, category_name = ? where post_id = ?"
    ); //id lagbe tai sesh parameter a dewa hoice must careful nicer run fun() ar uporer prepare() thik rakhte hobe thunder er modhe id upore , nice gele kono problem nai
    try {
      const response = await updatePost.run(   
        req.body.title,
        (req.body.slug = slugify(req.body.title)),
        req.body.imageUrl,
        req.body.excerpt,
        req.body.content,
        req.body.author,
        req.body.featured,
        req.body.category_name,
        req.query.postId
                // req.query.post_id -->naming convention jeita query hishebe dici ta file theke nicce by default
        );
      await response.finalize();
    } catch (error) {
      res.json(error, "no posted data is updated");
    }
  }
  else if (req.method === "DELETE") {
     await db.get(
      "DELETE FROM post where post_id = ?", [req.query.postId]); 
      res.json('deleted Successfully')
  }else {
    res.json("method not supported");
  }
}
