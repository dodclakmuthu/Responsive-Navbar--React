function NavLinks (props) {
  return  (
    props.fields.map((field, index) => {
      return <li key={index}>{field.name}</li>
    })
  )
}

export default NavLinks;