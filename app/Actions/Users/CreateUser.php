<?php

namespace App\Actions\Users;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Lorisleiva\Actions\Concerns\AsAction;

class CreateUser
{
    use AsAction;

    public function handle(array $data)
    {
        $password = $data['password'];
        $data['password'] = Hash::make($password);
        $user = User::create($data);
        return  $user;
    }

    public function rules(): array
    {
        return [
            'name' => 'required',
            'email' => 'required|email|regex:/(.+)@(.+)\.(.+)/i|unique:users,email,',
            'password' => [
                'required',
                'string',
                'min:6',
                'regex:/[A-Z]/', // At least one uppercase letter
                'regex:/[a-z]/', // At least one lowercase letter
                'regex:/[0-9]/', // At least one number
                'regex:/[^A-Za-z0-9]/', // At least one special character
                'confirmed',
            ],
        ];
    }

    public function asController(Request $request)
    {
        $data = $request->only('name', 'email','password');
        return $this->handle($data);
    }


    public function htmlResponse()
    {
        return  redirect()->route('/')->withSuccess('User Created Successfully');
    }
}
