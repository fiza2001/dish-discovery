import Link from 'next/link';


export default function Login() {
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center">
        <div>
          <h1 className="text-center">Dish Discovery</h1>
          <Link href="/home">
            <button className="btn btn-success">Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
