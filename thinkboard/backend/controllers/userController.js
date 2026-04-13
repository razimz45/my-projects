import Note from "../models/Note.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({createdAt:-1});;

    res.status(200).json({message:"fetched all notes succesfully",data:notes})
  } catch (error) {
    console.error("Error fetching notes:");
    res.status(500).json({ error });
  }
}; 


export const addNote=async (req,res)=>{
   try {
     const{title,content}=req.body;

    const note= new Note({title,content})
    await note.save()

    res.status(201).json({message:"note created succesfully",data:note})
   } catch (error) {
     console.error(error)
    res.status(500).json({message:"server error"})
   }

}

export const deleteNote = async (req,res)=>{
  try {

    const deletedNote=await Note.deleteOne({_id:req.params.id})

    res.status(200).json({message:"deleted successfully",data:deletedNote})
    
  } catch (error) {
    console.error(error)
    res.status(500).json({message:"server error"})
    
  }
}

export const updateNote= async (req,res) => {

 try {
   const {title,content}=req.body;
  const {id}=req.params;
  const updatedNote=await Note.findByIdAndUpdate(id,{title,content},{new:true})
  if(!updatedNote)return res.status(404).json({message:"note not found"})

  res.status(200).json({message:"updated succesfully",data:updatedNote})
 } catch (error) {
    console.error(error)
    res.status(500).json({message:"server error"})
 }
  
}

export const findNote = async (req,res) => {

  try {
    const {id}=req.params;
    const note=await Note.findById(id)

    if(!note)return res.status(404).json({message:"note not found"})

    res.status(200).json({message:"note fetched succesfully",data:note})


  } catch (error) {
    console.error(error)
    res.status(500).json({message:"server error"})
  }
  
}

