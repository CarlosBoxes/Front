import{ Routes, RouterModule } from "@angular/router";
import{ ModuleWithProviders } from "@angular/core";
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { MessengerComponent } from './components/messenger/messenger.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { TweetsComponent } from './components/tweets/tweets.component';
import { LogoutComponent } from './components/logout/logout.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';


const appRouter: Routes = [
    {path: 'registro',component:RegistroComponent},
    {path: '', component:LoginComponent},
    {path: 'messenger', component: MessengerComponent},
    {path: 'perfil', component: PerfilComponent}, 
    {path: 'tweets', component: TweetsComponent }, 
    {path: 'logout', component: LogoutComponent}, 
    {path: 'usuarios', component: UsuariosComponent}
]

export const appRoutingProviders : any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRouter);