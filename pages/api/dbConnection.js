import { unstable_getServerSession } from "next-auth/next"
import connect from "../../utils/database"


export default async function handler (req,res){
const { db } = await connect();

if (req.method == 'POST'){
    const response = await db.collection('documentos').insertOne({
        name: 'teste',
        age: 25,
    })
    res.status(200).json({message: "Ta funfando"})
} else {
    res.status(400).json({message: "GeT"})
}

}