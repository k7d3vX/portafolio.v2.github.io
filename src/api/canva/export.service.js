import canvaApi from './canva.service';

export const exportDesignToPdf = async (designId) => {
  try {
    const response = await canvaApi.post('/designs/export', {
      designId,
      format: 'pdf', // Formato del archivo
      quality: 'standard', // Calidad del PDF
    });

    // Puedes manejar la respuesta aquí, por ejemplo, descargando el archivo
    const { data } = response;
    console.log('PDF exportado:', data);

    // Puedes usar una librería para descargar el archivo, como FileSaver.js
    // o simplemente abrir el enlace en una nueva pestaña
  } catch (error) {
    console.error('Error exportando diseño:', error);
  }
};
