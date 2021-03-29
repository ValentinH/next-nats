import { connect } from 'nats.ws'

export default function Home() {
  const [status, setStatus] = React.useState('initialising')

  React.useEffect(() => {
    async function init() {
      try {
        const nc = await connect({ servers: ['demo.nats.io:4442', 'demo.nats.io:4222'] })
        setStatus(`connected to ${nc.getServer()}`)
        // this promise indicates the client closed
        const done = nc.closed()
        // do something with the connection

        // close the connection
        await nc.close()
        // check if the close was OK
        const err = await done
        if (err) {
          setStatus(`error closing:`, err)
        }
      } catch (err) {
        setStatus(`error connecting to demo.nats.io`)
      }
    }
    init()
  }, [])

  return (
    <main>
      <h1>nats.ws Hello world</h1>

      <p>{status}</p>
    </main>
  )
}
