import Link from 'next/link';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href="/about"><a>About</a></Link></li>
      <li><Link href="/campaign"><a>Campaign</a></Link></li>
      <li><Link href="/cities"><a>Cities</a></Link></li>
      <li><Link href="/characters"><a>Character Vault</a></Link></li>
      <li><Link href="/quests"><a>Quests</a></Link></li>
      <li><Link href="/encounters"><a>Encounters</a></Link></li>
    </ul>
  </nav>
);

export default Navbar;
