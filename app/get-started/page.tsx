import { title } from "@/components/primitives";
import Link from "next/link";

export default function GetStarted() {
	return (
		<main>
			
			<h1 className="text-xl text-start p-5">Procedure of Affiliate Marketing</h1>

			<div className="text-start p-5">
				<div>
				<h1 className={title({ color: "cyan" })}>For Affiliates&nbsp;</h1>
					<ol>
						<li>
						<strong>Choose Your Niche:</strong>
						<p>
							Select a niche that aligns with your interests, expertise, and
							audience. This will help you target a specific audience effectively.
						</p>
						</li>
						<li>
						<strong>Find Affiliate Programs:</strong>
						<p>Research and identify affiliate programs relevant to your niche</p>
						</li>
						<li>
						<strong>Create Quality Content:</strong>
						<p>
							Develop compelling content such as blog posts, product reviews,
							videos, or social media posts that provide value to your audience.
						</p>
						</li>
						<li>
						<strong>Promote Products Ethically:</strong>
						<p>
							Focus on recommending high-quality products or services that
							genuinely benefit your audience. Build trust by avoiding overly
							promotional tactics.
						</p>
						</li>
						<li>
						<strong>Track and Optimize:</strong>
						<p>
							Use tracking tools and analytics to monitor the performance of your
							affiliate campaigns. Analyze data to optimize your strategies for
							better results.
						</p>
						</li>
					</ol>
				</div>
			</div>
			
			<div className="text-start p-5">
				<h1 className={title({ color: "cyan" })}>For Companies&nbsp;</h1>
				<ol>
				<li>
					<strong>
					<Link href={"/join-us"}>Register</Link>
					</strong>
					<p>
					Enter in your email address and an email with a link containing
					the login credentials will be sent to your inbox (check spam
					folder)
					</p>
				</li>
				<li>
					<strong>
					<Link href={"/join-us"}>Login</Link>
					</strong>
					<p>Login with the credentials given in the email</p>
				</li>
				<li>
					<strong>
					<Link href={"/create"}>Add the listing</Link>
					</strong>
					<p>
					Include the category , and all the either fields. Then hit create!
					</p>
				</li>
				<li>
					<strong>
					<Link href={"/"}>Check your listing</Link>
					</strong>
					<p>
					Your listing will be mentioned in the homepage , where affiliates
					can discover your company and involve in!
					</p>
				</li>
				<li>
					<strong>Track and Optimize:</strong>
					<p>
					Use tracking tools and analytics to monitor the performance of
					your affiliate campaigns. Analyze data to optimize your strategies
					for better results.
					</p>
				</li>
				</ol>
			</div>
			
			
		</main>
		
	);
}
