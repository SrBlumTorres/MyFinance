type MenuItemProps = {
    name: string; 
    icon: React.ElementType; // Representa un componente de React
    href: string;
};

function MenuItem(props: MenuItemProps) {
    const Icon = props.icon;

    return (

        <li className="flex justify-start gap-2 items-center p-4 ps-6 hover:bg-secundary rounded-full hover:text-white">
            <Icon className="w-6 h-6"/>
            <a href={props.href}>{props.name}</a>
        </li>

    )
}

export default MenuItem;