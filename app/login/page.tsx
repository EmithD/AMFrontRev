import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

export default function LoginPage() {
	return (
		<div>
			<div className="pb-6">
				<h1 className={title({ color: "cyan" })}>Login</h1>
			</div>

	
			<form action="" className="flex flex-col gap-6 max-w-full">

					<Input
						isRequired
						type="email"
						label="Email"
						placeholder="Enter your email"
						
					/>

					<Input
						isRequired
						type="password"
						label="Password"
						
					/>

					<Button
						className="bg-gradient-to-tr from-slate-800 to-lime-200"
						type="submit"
					>
						Login
					</Button>

			</form>
		
		</div>
	);
}
