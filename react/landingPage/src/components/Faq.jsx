export default function Faq() {
  return (
    <div className="w-full">
      <div className="w-10/12 flex justify-between mx-auto">
        {/* left side  */}
        <div className="w-3/12">
          <p>STILL HAVE QUESTION?</p>
          <h1>FAQ</h1>
        </div>

        {/* Right side  */}
        <div className="w-7/12 flex">
          <div>
            <h1>What are the top attractions included in your tours?</h1>
          </div>
          <div>
            <button>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}
