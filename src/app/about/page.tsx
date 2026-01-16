
export default async function AboutPage() {
  await new Promise(resolv=> setTimeout(resolv,4000))
  throw new Error("halllooo")
  return (
    <div>AboutPage</div>
  )
}
