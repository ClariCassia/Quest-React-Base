const ParagraphColored = (props) => {
	return (
		<>
			<p className="paragraphColored" style={{ color: props.color }}>
				{props.paragraph.toUpperCase()}</p>
		</>
	)
}
export default ParagraphColored

ParagraphColored.defaultProps = {
	color: 'orange'
}