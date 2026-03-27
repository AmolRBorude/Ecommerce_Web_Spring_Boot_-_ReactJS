import { useEffect, useState } from "react";

function ImageSlider() {

    const images = [
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200",
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200",
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1200",
        "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=1200"
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setCurrent((prev) =>
                prev === images.length - 1 ? 0 : prev + 1
            );

        }, 3000);

        return () => clearInterval(interval);

    }, []);

    return (

        <div className="slider">

            {images.map((img, index) => (

                <img
                    key={index}
                    src={img}
                    alt="banner"
                    loading="lazy"
                    className={
                        index === current
                            ? "slide active"
                            : "slide"
                    }
                />

            ))}

        </div>

    );
}

export default ImageSlider;