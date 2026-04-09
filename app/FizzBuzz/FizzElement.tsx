type FizzElementProps = {
    value: string;
}

export default function FizzElement(props: FizzElementProps)
{
    return <div>{props.value}</div>;
}
