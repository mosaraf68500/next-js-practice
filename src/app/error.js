'use client'

const Error = ({ error, reset }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold text-red-600">
        {error?.message || "Something went wrong!"}
      </h1>
      <button
        className="btn btn-error px-4 py-2 rounded-lg"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  )
}

export default Error
