import { useEffect, useState } from 'react';
import { WikiModal } from './WikiModal';
import { WikiPhotos } from './WikiPhotos';


export function Wiki({ user }) {
  const [modalPhoto, setModalPhoto] = useState(null);
  const [pages, setPages] = useState([1]);
  const [infinite, setInfinite] = useState(true);

  useEffect(() => {
    let wait = false;
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.screenY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1]);
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500);
        }
      }
    }

    window.addEventListener('wheel', infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);
    return () => {
      window.removeEventListener('wheel', infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [infinite]);

  return (
    <div>

      {modalPhoto && (
        <WikiModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map((page) => (
        <WikiPhotos
          key={page}
          user={user}
          page={page}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
        />
      ))}
    </div>
  );
}
