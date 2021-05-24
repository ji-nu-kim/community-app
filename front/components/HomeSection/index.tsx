import HomeSectionCard from 'components/HomeSectionCard';
import { ICommunity, IUser } from 'interfaces/db';
import Link from 'next/link';
import React from 'react';
import { HomeSectionContainer } from './styles';

interface HomeSectionProps {
  communities: ICommunity[];
  changableCommunities: ICommunity[];
  user: IUser | null;
}

function HomeSection({
  communities,
  changableCommunities,
  user,
}: HomeSectionProps) {
  return (
    <HomeSectionContainer>
      {/* 유저정보가 없어도 보여지는 카드 */}
      <section className="section-1">
        <h1>
          <span>새로운</span> 커뮤니티를 만나보세요!
        </h1>
        <div className="cards-container">
          {communities.map(community => (
            <Link key={community.id} href={`/community/${community.id}`}>
              <a>
                <HomeSectionCard
                  profilePhoto={community.profilePhoto}
                  categoryName={community.Categories[0].name}
                  country={community.country}
                  communityName={community.communityName}
                />
              </a>
            </Link>
          ))}
        </div>
      </section>

      {/* 유저정보가 있을 때 보여지는 카드  */}
      {user && changableCommunities && (
        <>
          <section className="section-2">
            <h1>
              <span>우리동네</span> 커뮤니티
            </h1>
            <div className="cards-container">
              {changableCommunities.map(community => (
                <Link key={community.id} href={`/community/${community.id}`}>
                  <a>
                    <HomeSectionCard
                      profilePhoto={community.profilePhoto}
                      categoryName={community.Categories[0].name}
                      country={community.country}
                      communityName={community.communityName}
                    />
                  </a>
                </Link>
              ))}
            </div>
          </section>
        </>
      )}
    </HomeSectionContainer>
  );
}

export default HomeSection;
