// Password checker
export function checkPasswordStrength(password) {
    const minLength = 6;
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    if (password.length < minLength) {
        return "Password must be at least 6 characters long.";
    }
    if (!hasNumbers) {
        return "Password must contain at least one number.";
    }
    if (!hasSpecialChars) {
        return "Password must contain at least one special character.";
    }
    return null;
}

// Email checker
export function checkEmailValidity(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return "Please enter a valid email address.";
    }
    return null;
}


// Sign-up logic using Supabase
export async function signUp(supabase, email, password) {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password
    }); 

    return { data, error };
}

// Log-in logic using Supabase
export async function logIn(supabase, email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
    });

    return { data, error };
}

// Log-out logic using Supabase
export async function logOut(supabase) {
    const { error } = await supabase.auth.signOut();
    return { error };
}