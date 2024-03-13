export default function Home() {
  console.log(process.env.NODE_ENV);
  console.log(process.env.PASSWORD)
  return (
    <main>
      <h1> Enviroment variable in Next js</h1>
      
      {process.env.NODE_ENV == "development" ? (
        <h3>This is devlopment mode </h3>
      ) : (
        <h3>This is production mode</h3>
      )}

      <br />
      <br />
      <h2>Export Static HTMl using Nextjs</h2>
      <div>
        change in next.config file 
        then after 
        hit npm run build 
        then after
        check create out folder and in out folder index.html
      </div>
    </main>
  );
}
