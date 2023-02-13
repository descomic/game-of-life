export default function Cell(props: { activated: boolean; }) {
    const activated = props.activated
    
    return (
        <td style={{ backgroundColor: activated ? 'black' : 'white', color: activated ? 'black' : 'white' }}>_</td>
    );
}