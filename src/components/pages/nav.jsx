import { Button } from '@/components/ui/button'
function Nav() {
  return (
    <div className='flex justify-between items-center px-20 py-4'>
        <div className='flex gap-4 justify-center items-center'>
            <img src='/logo.svg'/>
            <div className='flex gap-2 justify-center items-center'>
                <p>About</p>
                <p>SIP</p>
                <p>Studio</p>
                <p>SEEQ</p>
                <p>Platforms</p>
                <p>Initiatives</p>
                <p>More</p>
            </div>
        </div>
        <div className='flex gap-4'>
            <Button variant='outline'>
                Sync With Us
            </Button>
            <Button>
                Apply to SIP 1.0
            </Button>
        </div>
    </div>
  )
}

export default Nav