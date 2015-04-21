<?php

class AuthController extends BaseController {


    public function __construct()
    {
        $this->beforeFilter('auth', array('only' => 'getLogout'));
        $this->beforeFilter('guest', array('except' => 'getLogout'));
        $this->beforeFilter('csrf', array('on' => 'post'));
    }

    /**
     * Affiche le formulaire de login
     *
     * @return View
     */
    protected function createView($name)
    {
        return View::make($name);
    }

    /**
     * Affiche le formulaire de login
     *
     * @return View
     */
    public function getLogin()
    {
        return $this->createView('auth.login');
    }

    /**
     * Affiche le formulaire d'inscription
     *
     * @return View
     */
    public function getInscription()
    {
        return $this->createView('auth.inscription');
    }

    /**
     * Traitement du formulaire de login
     *
     * @return Redirect
     */
    public function postLogin()
    {
        $nom = Input::get('nom');
        $passe = Input::get('password');

        if(Auth::attempt(array('username' => $nom, 'password' => $passe), Input::get('souvenir')))
            //echo 'Vous êtes maintenant connecté '.Auth::user()->username;
            return Redirect::back()
                ->with('flash_notice', 'Vous avez été correctement connecté avec le pseudo ' . Auth::user()->username);
        else
            return Redirect::refresh()->with('flash_error', 'Pseudo ou mot de passe non correct !')->withInput();
    }

    /**
     * Traitement du formulaire d'inscription
     *
     * @return Redirect
     */
    public function postInscription()
    {
        $v = User::validate(Input::all());
        if ($v->passes()) {
            $user = new User;
            $user->username = Input::get('username');
            $user->email = Input::get('email');
            $user->password = Hash::make(Input::get('password'));
            $user->save();
            return Redirect::back()->with('flash_notice', 'Votre compte a été créé.');
        }
        return Redirect::refresh()->withErrors($v)->withInput();
    }

    /**
     * Effectue le logout
     *
     * @return Redirect
     */
    public function getLogout()
    {
        Auth::logout();
        return Redirect::route('index')->with('flash_notice', 'Vous avez été correctement déconnecté.');
    }
}
