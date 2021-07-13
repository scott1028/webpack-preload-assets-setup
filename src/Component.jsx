import imgUrl from './component-img.jpeg';
 
// NOTE: how to handle img preloading?
if (false) {
// if (true) {
  const img = document.createElement('img');
  img.src = imgUrl;
}

export const Component = () => {
  return (
    <>
      <div>
        <img src={imgUrl} alt={imgUrl} />
      </div>
    </>
  );
};

export default Component;
