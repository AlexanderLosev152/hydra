const FooterLinks = ({arr}) =>  {
    return <ul>
        {arr.map((item, index) => (
        <li key={index}><a href={item.path}>{item.title}</a></li>
        ))}
    </ul>
}

export default FooterLinks;