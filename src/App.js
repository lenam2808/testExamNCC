import './App.css';

function App() {
  return (
    <div className="container">
      <div className="left">
        <div className="title">Home</div>
        <div className="title">Services</div>
        <div className="title">News</div>
        <div className="title">Blog</div>
        <div className="title">Contact</div>
      </div>
      <div className="right">
        <div className="banner">
            <img className="logo" src="./images/logoNCC.png" alt="logo" />
        </div>
        <div className="content1">
          <div className="content1Title">Lorem ipsum dolor sit asmet?</div>
          <div className="content1Content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu 
          posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. 
          Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.
          </div>
        </div>
        <div className="content2">
          <div className="groups">
            <div className="titleContent2">Lorem ipsum dolor sit amet</div>
            <div className="flex">
              <div className="logoContent2">              
                <img src="/images/css-icon 1.png" alt="logo-css" />
              </div>
              <div className="text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at </div>
            </div>
            <div className="text2">ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</div>
          </div>
          <div className="groups">
            <div className="titleContent2">Lorem ipsum dolor sit amet</div>
            <div className="flex">
              <div className="logoContent2">              
                <img src="/images/html-icon 1.png" alt="logo-css" />
              </div>
              <div className="text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at </div>
            </div>
            <div className="text2">ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</div>
          </div>
          <div className="groups">
            <div className="titleContent2">Lorem ipsum dolor sit amet</div>
            <div className="flex">
              <div className="logoContent2">              
                <img src="/images/url-icon 1.png" alt="logo-css" />
              </div>
              <div className="text1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at </div>
            </div>
            <div className="text2">ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.</div>
          </div>
        </div>
        <div className="footer">
          <div className="copyright">
            <p>
              Copyright <i class="fal fa-copyright"></i> {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
