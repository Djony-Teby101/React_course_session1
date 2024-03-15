

export default function Footer() {
    const date=new Date().getFullYear()
  return (
    <footer>
        <p> &copy;{date} react-site </p>
    </footer>
  )
}
