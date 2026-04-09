const MateriImage = ({ src, alt, caption }) => {
    return (
        <figure className="my-6">
            {src ? (
                <img 
                    src={src} 
                    alt={alt} 
                    className="w-full max-w-2xl mx-auto rounded-lg shadow-sm border border-gray-200 object-cover" 
                    loading="lazy"
                />
            ) : (
                <div className="w-full max-w-2xl mx-auto h-48 sm:h-64 bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-4 sm:p-6 text-center">
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    <span className="text-gray-500 font-medium text-xs sm:text-sm">Belum ada gambar (silakan isi src)</span>
                    <span className="text-gray-800 mt-2 font-semibold text-xs sm:text-sm">Arahan Gambar:</span>
                    <span className="text-gray-600 italic text-xs sm:text-sm break-all">"{alt}"</span>
                </div>
            )}
            
            {caption && (
                <figcaption className="text-center text-xs sm:text-sm text-gray-500 mt-3 font-medium">
                    {caption}
                </figcaption>
            )}
        </figure>
    );
};

export default MateriImage;
