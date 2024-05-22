export default function NewsDetailLayout({ children, modal }) {
  console.log(modal);
  return (
    <>
      {modal}
      {children}
    </>
  );
}
