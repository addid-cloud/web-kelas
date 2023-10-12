import React from 'react';

const Gallery = () => {
    const images = ['image1.jpg', 'image2.jpg', 'image3.jpg']; // Ganti dengan nama file gambar Anda

    return (
        <div className="gallery">
            {images.map((image, index) => (
                <img key={index} src={require(`.././public/images/${image}`)} alt={`gambar ${index + 1}`} />
            ))}
            
        </div>
    );
}

export default Gallery;
