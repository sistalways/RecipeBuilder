import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/home')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='MainContent'>
    <div >
        <div className='NavigationLinks'>
            <a href='/recipeBuilder' >Recipe Builder</a>
            <a href='/profile' >Profile</a>
            <a href='/'>Logout</a>
            <a href='/myRecipies'>My Recipes</a>
        </div>

        <div className='DashboardContent'>Welcome to Recipe Builder</div>
    </div>
    
  </div>
}
