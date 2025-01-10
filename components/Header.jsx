import chefClaude from '../assets/chef-claude-icon.png'

export default function Header(){
    return(
        <header>
        <nav>
            <img src={chefClaude} alt="chef-claude" />
            <p>Chef Claude</p>
        </nav>
        </header>
        
    )
}