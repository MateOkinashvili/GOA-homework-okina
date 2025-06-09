const images = [
  { id: 1, url: 'https://th.bing.com/th/id/R.4a10cc545ddbd0170e461fc60b002a98?rik=B49H9K' },
  { id: 2, url: 'https://live.staticflickr.com/8458/8068208950_7008c1bd3a.jpg' },
  { id: 3, url: 'https://th.bing.com/th/id/R.c6474327b1ba58a89422eb98ae2f264d?rik=Kn5X7R' },
  { id: 4, url: 'https://th.bing.com/th/id/OIP.Gfd--rU4zTsbk9wREziwHAFwHaFw?w=676&h=537&rs=1&pid=ImgDetMain' },
  { id: 5, url: 'https://img.freepik.com/premium-photo/majestic-nature-landscape-with-sun' },
];

export const Random = () => {
  const [image, setImage] = useState(null);
  const changeImage = () => setImage(images[Math.floor(Math.random() * images.length)]);

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100">
      <button onClick={changeImage} className="mb-4 bg-blue-600 text-white rounded p-2">
        Random
      </button>
      {image && (
        <img src={image.url} alt="Random" className="w-full h-auto rounded" />
      )}
    </div>
  );
};
