import chefIcon from './../assets/chef.png';

export default function Header() {
    return (
        <header>
            <img src={chefIcon} alt="chef head icon" />
            <span>
                Chef Claude
            </span>
        </header>
    );
}