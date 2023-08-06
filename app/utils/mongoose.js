import mongoose from 'mongoose';

const conn = {
  isConnected: false,
};

export async function connectDB() {
  if (conn.isConnected) return;

  try {
    // Utilizamos la opción useNewUrlParser para evitar errores de deprecación.
    const db = await mongoose.connect(process.env.DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    // Asignamos el nombre de la base de datos a la variable conn.
    conn.isConnected = db.connections[0].readyState;
    console.log('🚀 ~ db Name:', db.connections[0].name);  
    console.log('🚀 ~ Mongoose is connected');
  } catch (error) {
    console.error('🚀 ~ Unable to connect to MongoDB:', error);
  }
}

mongoose.connection.on('error', (err) => {
  console.error('🚀 ~ Mongoose error:', err);
});
