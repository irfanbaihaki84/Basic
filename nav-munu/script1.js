// mengambil element div class="demo"
const client = document.querySelector('div.demo');

// membuat element tag <h1></h1>
const font1 = document.createElement('h1');
const div1 = document.createElement('div');

client.appendChild(div1);
// font1.innerHTML = 'Hallo World!';

document.addEventListener('click', (e) => {
  const isDropdownButton = e.target.matches('[data-dropdown-button]');
  if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;

  let currentDropdown;
  if (isDropdownButton) {
    currentDropdown = e.target.closest('[data-dropdown]');
    currentDropdown.classList.toggle('active');
  }

  document.querySelectorAll('[data-dropdown].active').forEach((dropdown) => {
    if (dropdown === currentDropdown) return;
    dropdown.classList.remove('active');
  });
});

div1.innerHTML = `
<div class="nav">
    <div class="dropdown" data-dropdown>
        <button class="link" data-dropdown-button>Information</button>
        <div class="dropdown-menu information-grid">
            <div>
                <div class="dropdown-heading">Free Tutorial</div>
                <div class="dropdown-links">
                    <a href="#" class="link">All</a>
                    <a href="#" class="link">Latest</a>
                    <a href="#" class="link">Popular</a>
                </div>
            </div>
            <div>
                <div class="dropdown-heading">Courses</div>
                <div class="dropdown-links">
                    <a href="#" class="link">JavaScript</a>
                    <a href="#" class="link">CSS</a>
                    <a href="#" class="link">ReactJS</a>
                </div>
            </div>
            <div>
                <div class="dropdown-heading">Blog</div>
                <div class="dropdown-links">
                    <a href="#" class="link">All</a>
                    <a href="#" class="link">Latest</a>
                    <a href="#" class="link">ReactJS</a>
                </div>
            </div>
            <div>
                <div class="dropdown-heading">Other</div>
                <div class="dropdown-links">
                    <a href="#" class="link">Twitter</a>
                    <a href="#" class="link">Facebook</a>
                    <a href="#" class="link">Instagram</a>
                </div>
            </div>
        </div>
    </div>

    <a href="#" class="link">Pricing</a>

    <div class="dropdown" data-dropdown>
        <button class="link" data-dropdown-button>Login</button>
        <div class="dropdown-menu">
            <form class="form-login">
                <label for="email">Email</label>
                <input type="email" name="email" id="email"/>
                <label for="password">Password</label>
                <input type="password" name="password" id="password"/>
                <button type="submit">Login</button>
            </form>
        </div>
    </div>
</div >
`;
