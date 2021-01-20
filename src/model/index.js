const db = require(`..db`) 
class Model {
    constructor(name){
        this.name = name
    }
    async run(query){
        try{
         const response = await db.query(query)
         return response
        }catch(e){
            throw new Error(e)
        }
    }

 async getEverything(id){
     if(!id ){
         throw new Error ('Provide id')
     }
     const query = `SELECT articles.id as article_id,articles.headline as article_headline, authors.name as author_name, categories.name as category_name
     FROM articles 
     INNER JOIN authors
     ON authors.id = articles.authorid
     INNER JOIN categories
     ON categories.id = articles.categoryid
     WHERE articles.id = ${id}`
     const res = await run (query)
     return response
 }

async getArticlesByContent(content){
    if(!id){
        throw new Error('Provide id')
    }
    const query = `SELECT * FROM articles WHERE articles.content LIKE '%${content}%'`
    const res = await db.query(query)
    return res
}
async getArticlesByHeadline(headline){
    if(!id){
        throw new Error('Provide id')
    }
    const query = `SELECT * FROM articles WHERE articles.headline LIKE '%${headline}%'`
    const res = await db.query(query)
    return res
}
 async findById(id){
     if(!id){
         throw new Error('Provide id')
     }
     const query = `SELECT * FROM ${this.name} WHERE id = ${parseInt(id,10)}]}`
     const response = await run(query)
     return response
 }
 async findByIdAndDelete(id){
     if(!id){
         throw new Error('Provide id')
     }
     const query = `DELETE FROM ${this.name} WHERE id = ${parseInt(id,10)}`
     const res = await this.run(query)
     return res
 }
 async findByIdAndUpdate(id,fields){
    if(!id){
        throw new Error('Provide id')
    }
    const query = `UPDATE ${this.name} SET ${Object.entries(fields).map(([key,value])=>`${key}=${value}`).join(",")} WHERE id = ${parseInt(id,10)}`
    const response = await run(query)
    console.log(response)
 }
 async findOne(fields){ 
        if(!fields||Object.values(fields).length===0){
            const query = `SELECT * FROM ${this.name}`
            const response = await this.run(query);
            return response;
        }
        else{
            const entries = Object.entries(fields);
            const whereClause = `${entries.map(([key,value])=>`${key}='${value}'`).join(" AND ")}`;
            const query = `SELECT * FROM ${this.name} WHERE  ${whereClause};`
            const response = await this.run(query);
            return response;
        }
       
    }
    async save(fields){
        if(!fields || Object.values(fields).length===0){
             throw new Error("How can I create without values?")
        }
        const columns = Object.keys(fields);
        const values = Object.values(fields);
        const query = `INSERT INTO  ${this.name} (${columns.join(",")}) VALUES (${values.map(v=>`'${v}'`).join(",")});`
        const response = await this.run(query)
        return response;
    }
    } //why is it red 

module.exports = Model;