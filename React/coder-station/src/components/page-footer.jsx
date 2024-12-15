function PageFooter() {
  return (
    <div>
      <div className='my-5'>测试代码尾部，现在那个网站还用这个东西？</div>
      <div className='my-5'>©{new Date().getFullYear()}-Ton`s Coder Station</div>
      <div className='my-5'>Powered by Vite & React </div>
    </div>
  );
}

export default PageFooter;