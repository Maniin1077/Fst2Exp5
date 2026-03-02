import { Card, CardContent, Typography } from '@mui/material'

export default function Cards() {
  const data = [
    { title: 'Fast', desc: 'Lightning fast Vite build system.' },
    { title: 'Scalable', desc: 'Component based React structure.' },
    { title: 'Modern UI', desc: 'Material UI + Bootstrap styling.' }
  ]

  return (
    <div className="container my-5">
      <div className="row g-4">
        {data.map((item, i) => (
          <div className="col-md-4" key={i}>
            <Card sx={{ height: '100%', transition: '0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
              <CardContent>
                <Typography variant="h5">{item.title}</Typography>
                <Typography variant="body2" className="mt-2">
                  {item.desc}
                </Typography>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}
