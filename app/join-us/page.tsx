import { title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Link from "next/link";


export default function JoinPage() {
	return (
		<div>
			
			<h1 className={title()}>Join Us</h1>
			<div className="">
				<div className="pb-4 pt-4">
					<h1 className={title({ color: "cyan", size: "sm"})}>All we need is your email</h1>
				</div>
				<form action="" className="flex flex-row gap-6">
					<Input
					isRequired
					type="email"
					label="Email"
					placeholder="Enter your email"
					className="max-w-full"
					/>
					<div className="pt-2 ">
						<Button className="bg-gradient-to-tr from-slate-800 to-lime-200" type="submit">Register</Button>
					</div>
				</form>
				<div className="pt-2">
					<p>Already a user? <Link href={'/login'}>Login</Link></p>
				</div>
			</div>

		</div>
	);
}
