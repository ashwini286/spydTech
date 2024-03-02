import React from 'react';
// import './animatedfooter.css';

function AnimatedFooter() {
  return (
    <>
      <footer className="footer bg-[#93c5fd] text-white ">
        <div className="footer__parralax pt-20">
          <div className="footer__parralax-trees"></div>
          <div className="footer__parralax-moto"></div>
          <div className="footer__parralax-secondplan"></div>
          <div className="footer__parralax-premierplan"></div>
          <div className="footer__parralax-voiture"></div>
        </div>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="footer__col">
              <h3 className="footer__col-title flex items-center">
                <i data-feather="shopping-bag"></i>
                <span className="ml-2">La boutique</span>
              </h3>
              <nav className="footer__nav">
                <ul className="footer__nav-list">
                  <li className="footer__nav-item">
                    <a href="" className="footer__nav-link">
                      Mentions légales
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a href="" className="footer__nav-link">
                      Politique de confidentialité
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a href="" className="footer__nav-link">
                      CGV
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a href="" className="footer__nav-link">
                      Livraisons et retours
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a href="" className="footer__nav-link">
                      Règlement concours
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer__col">
              <h3 className="footer__col-title flex items-center">
                <i data-feather="share-2"></i>
                <span className="ml-2">Nos réseaux</span>
              </h3>
              <nav className="footer__nav">
                <ul className="footer__nav-list">
                  <li className="footer__nav-item">
                    <a href="" className="footer__nav-link flex items-center">
                      <i data-feather="youtube" className="mr-1"></i>
                      <span>Youtube</span>
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a href="" className="footer__nav-link flex items-center">
                      <i data-feather="facebook" className="mr-1"></i>
                      <span>Facebook</span>
                    </a>
                  </li>
                  <li className="footer__nav-item">
                    <a href="" className="footer__nav-link flex items-center">
                      <i data-feather="instagram" className="mr-1"></i>
                      <span>Instagram</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="footer__col">
              <h3 className="footer__col-title flex items-center">
                <i data-feather="send"></i>
                <span className="ml-2">Contact</span>
              </h3>
              <nav className="footer__nav">
                <ul className="footer__nav-list">
                  <li className="footer__nav-item">
                    <a href="mailto:contact.laboiserie@gmail.com" className="footer__nav-link">
                      contact.laboiserie@gmail.com
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="footer__copyrights mt-8">
            <p>Réalisé par <a href="https://twitter.com/silvereledev" target="_blank" className="text-blue-500">@SilvereLeDev</a></p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default AnimatedFooter;
