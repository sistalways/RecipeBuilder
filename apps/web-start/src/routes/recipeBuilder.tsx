import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/recipeBuilder')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='MainContent'>Hello "/recipeBuilder"!</div>
}
